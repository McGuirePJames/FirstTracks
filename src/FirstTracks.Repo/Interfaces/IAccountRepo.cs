using FirstTracks.Core.Models;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Interfaces
{
	public interface IAccountRepo
	{
		Task<IdentityResult> CreateUserAsync(ApplicationUser user, string password);
	}
}
