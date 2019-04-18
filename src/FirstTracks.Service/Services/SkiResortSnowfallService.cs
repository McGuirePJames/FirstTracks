using System.Collections.Generic;
using System.Threading.Tasks;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;

namespace FirstTracks.Service.Services
{
	public class SkiResortSnowfallService : ISkiResortSnowfallService
	{
		private readonly ISkiResortSnowfallRepo _skiResortSnowfallRepo;

		public SkiResortSnowfallService(
		ISkiResortSnowfallRepo skiResortSnowfallService)
		{
			this._skiResortSnowfallRepo = skiResortSnowfallService;
		}

		public async Task<List<SkiResortSnowfall>> GetSkiResortSnowfallAsync(string skiResortId)
		{
			return await this._skiResortSnowfallRepo.GetSkiResortSnowfallAsync(skiResortId);
		}
	}
}
