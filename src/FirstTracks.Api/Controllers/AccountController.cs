using FirstTracks.Core.Models;
using FirstTracks.Service.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace FirstTracks.Api.Controllers
{
	[Route("/api/Account/[action]")]
	public class AccountController : Controller
    {
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly IAccountService _accountService;

		public AccountController(
			UserManager<ApplicationUser> userManager,
			IAccountService accountService
			)
		{
			this._userManager = userManager;
			this._accountService = accountService;
		}

		[HttpPost]

		public async Task<IActionResult> CreateUser(string emailAddress, string password)
		{
			var user = new ApplicationUser()
			{
				Email = emailAddress,
				UserName = emailAddress,
			};

			await this._accountService.CreateUserAsync(user, password);

			return Ok();
		}

		public IActionResult Index()
        {
            return View();
        }
    }
}