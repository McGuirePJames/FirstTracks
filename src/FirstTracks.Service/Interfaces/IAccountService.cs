using FirstTracks.Core.Models;
using System.Threading.Tasks;

namespace FirstTracks.Service.Interfaces
{
	public interface IAccountService
	{
		Task<Response> CreateUserAsync(ApplicationUser user, string password);
	}
}
