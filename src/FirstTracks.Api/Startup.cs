using FirstTracks.Core.Models;
using FirstTracks.Core.Repos;
using FirstTracks.Repo.Interfaces;
using FirstTracks.Repo.Repos;
using FirstTracks.Service.Interfaces;
using FirstTracks.Service.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace FirstTracks.Api
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			#region DI

			services.AddDbContext<ApplicationDbContext>(options =>
				options.UseSqlServer(Configuration.GetSection("ConnectionStrings").GetValue<string>("FirstTracksDb")));

			services.AddIdentity<ApplicationUser, IdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();

			services.Configure<ConnectionStrings>(x => x.FirstTracksDB = Configuration.GetSection("ConnectionStrings").GetValue<string>("FirstTracksDb"));

			services.AddScoped<IAccountService, AccountService>();
			services.AddScoped<IAccountRepo, AccountRepo>();
			#endregion

			services.Configure<IdentityOptions>(options =>
			{
				// Password settings
				options.Password.RequiredUniqueChars = 6;

				// Lockout settings
				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
				options.Lockout.MaxFailedAccessAttempts = 10;
				options.Lockout.AllowedForNewUsers = true;

				// User settings
				options.User.RequireUniqueEmail = true;
			});

			services.ConfigureApplicationCookie(options =>
			{
				// Cookie settings
				options.Cookie.HttpOnly = true;
				options.Cookie.Expiration = TimeSpan.FromDays(150);
				// If the LoginPath isn't set, ASP.NET Core defaults 
				// the path to /Account/Login.
				options.LoginPath = "/Account/Login";
				// If the AccessDeniedPath isn't set, ASP.NET Core defaults 
				// the path to /Account/AccessDenied.
				options.AccessDeniedPath = "/Account/AccessDenied";
				options.SlidingExpiration = true;
			});

			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});

			services.AddCors(options =>
			{
				options.AddPolicy(MyAllowSpecificOrigins,
				builder =>
				{
					builder.WithOrigins("https://localhost:44391");
				});
			});
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseHsts();
			}

			app.UseCors(builder => builder
				.AllowAnyOrigin()
				.AllowAnyMethod()
				.AllowAnyHeader()
				.AllowCredentials());

			app.UseAuthentication();
			app.UseHttpsRedirection();
			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "api/{controller}/{action}/");
			});
		}
	}
}
