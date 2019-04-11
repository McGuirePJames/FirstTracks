using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Interfaces
{
	public interface ISkiResortRepo
	{
		Task<SkiResort> GetSkiResortAsync(string skiResortId);
		Task<List<SkiResort>> GetSkiResortsAsync();
	}
}
