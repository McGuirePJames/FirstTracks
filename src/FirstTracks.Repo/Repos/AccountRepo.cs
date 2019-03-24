using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Repos
{
	public class AccountRepo : IAccountRepo
	{
		private readonly UserManager<ApplicationUser> _userManager;

		public AccountRepo(
			UserManager<ApplicationUser> userManager
			)
		{
			this._userManager = userManager;

		}

		public async Task<IdentityResult> CreateUserAsync(ApplicationUser user, string password)
		{
			return await this._userManager.CreateAsync(user, password);
		}
	}
}
