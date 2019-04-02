using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Repos
{
	public class MountainRepo : IMountainRepo
	{
		public async Task<Mountain> GetMountainAsync(string mountainId)
		{
			return null;
		}
	}
}
