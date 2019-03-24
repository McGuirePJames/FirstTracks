using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using FirstTracks.Service.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace FirstTracks.Service.Services
{
	public class AccountService : IAccountService
	{
		private readonly IAccountRepo _accountRepo;

		public AccountService(IAccountRepo accountRepo)
		{
			this._accountRepo = accountRepo;
		}

		public async Task<Response> CreateUserAsync(ApplicationUser user, string password)
		{
			IdentityResult result = await this._accountRepo.CreateUserAsync(user, password);

			var response = new Response();

			if (result.Succeeded)
			{
				response.Success = true;
			}
			else
			{
				response.Success = false;
				response.ResponseMessage = result.Errors.FirstOrDefault().Description;
			}

			return response;
		}
	}
}
