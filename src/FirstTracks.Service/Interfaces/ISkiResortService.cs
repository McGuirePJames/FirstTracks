using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Service.Interfaces
{
	public interface ISkiResortService
	{
		Task<SkiResort> GetSkiResortAsync(string skiResortId);
		Task<List<SkiResort>> GetSkiResortsAsync();
	}
}
