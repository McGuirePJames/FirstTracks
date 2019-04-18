using System.Collections.Generic;
using System.Threading.Tasks;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;

namespace FirstTracks.Repo.Repos
{
	public class SkiResortSnowfallRepo : ISkiResortSnowfallRepo
	{
		public Task<List<SkiResortSnowfall>> GetSkiResortSnowfallAsync(string skiResortId)
		{
			return null;
		}
	}
}
