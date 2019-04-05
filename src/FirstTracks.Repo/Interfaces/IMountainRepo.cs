using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Interfaces
{
	public interface IMountainRepo
	{
		Task<SkiResort> GetMountainAsync(string mountainId);
		Task<List<SkiResort>> GetMountainsAsync();
	}
}
