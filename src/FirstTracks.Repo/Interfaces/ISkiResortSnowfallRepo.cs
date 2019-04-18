using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Repo.Interfaces
{
	public interface ISkiResortSnowfallRepo
	{
		Task<List<SkiResortSnowfall>> GetSkiResortSnowfallAsync(string skiResortId);
	}
}
