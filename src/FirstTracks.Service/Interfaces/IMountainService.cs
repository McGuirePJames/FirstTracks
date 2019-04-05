using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Service.Interfaces
{
	public interface IMountainService
	{
		Task<SkiResort> GetMountainAsync(string mountainId);
		Task<List<SkiResort>> GetMountainsAsync();
	}
}
