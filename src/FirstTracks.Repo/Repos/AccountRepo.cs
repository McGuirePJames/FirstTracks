using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Repos
{
	public class AccountRepo : IAccountRepo
	{
		private readonly UserManager<ApplicationUser> _userManager;
		private readonly ConnectionStrings _connectionStrings;

		public AccountRepo(
			UserManager<ApplicationUser> userManager,
						IOptions<ConnectionStrings> options
			)
		{
			this._userManager = userManager;
			this._connectionStrings = options.Value;
		}

		public async Task<IdentityResult> CreateUserAsync(ApplicationUser user, string password)
		{
			return await this._userManager.CreateAsync(user, password);
		}
	}
}
