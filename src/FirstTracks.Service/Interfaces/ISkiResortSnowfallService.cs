using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Service.Services
{
	public interface ISkiResortSnowfallService 
	{
		Task<List<SkiResortSnowfall>> GetSkiResortSnowfallAsync(string skiResortId);
	}
}
