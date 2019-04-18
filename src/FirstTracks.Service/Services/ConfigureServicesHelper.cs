using FirstTracks.Core.Models;
using FirstTracks.Core.Repos;
using FirstTracks.Repo.Interfaces;
using FirstTracks.Repo.Repos;
using FirstTracks.Service.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace FirstTracks.Service.Services
{
	public class ConfigureServicesHelper
	{
		private readonly IServiceCollection _services;
		private readonly IConfiguration _configuration;

		public ConfigureServicesHelper(IServiceCollection services, IConfiguration configuration)
		{
			this._services = services;
			this._configuration = configuration;
		}

		public void Configure()
		{
			this._services.AddIdentity<ApplicationUser, IdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();

			this._services.Configure<ConnectionStrings>(x => x.FirstTracksDB = this._configuration.GetSection("ConnectionStrings").GetValue<string>("FirstTracksDb"));

			this._services.Configure<IdentityOptions>(options =>
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

			this._services.ConfigureApplicationCookie(options =>
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
		}
		
		public void ConfigureDependencyInjections()
		{
			this._services.AddScoped<IAccountService, AccountService>();
			this._services.AddScoped<IAccountRepo, AccountRepo>();
			this._services.AddScoped<ICommentService, CommentService>();
			this._services.AddScoped<ICommentRepo, CommentRepo>();
			this._services.AddScoped<ISkiResortService, SkiResortService>();
			this._services.AddScoped<ISkiResortRepo, SkiResortRepo>();
			this._services.AddScoped<ISkiResortSnowfallService, SkiResortSnowfallService>();
			this._services.AddScoped<ISkiResortSnowfallRepo, SkiResortSnowfallRepo>();
		}
	}
}
