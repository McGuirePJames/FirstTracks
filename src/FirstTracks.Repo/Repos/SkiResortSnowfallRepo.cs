using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace FirstTracks.Repo.Repos
{
	public class SkiResortSnowfallRepo : ISkiResortSnowfallRepo
	{
		private readonly ConnectionStrings _connectionStrings;
		public SkiResortSnowfallRepo(
			IOptions<ConnectionStrings> options)
		{
			this._connectionStrings = options.Value;
		}


		public async Task<List<SkiResortSnowfall>> GetSkiResortSnowfallAsync(string skiResortId)
		{
			using (SqlConnection conn = new SqlConnection(this._connectionStrings.FirstTracksDB))
			{
				var skiResortJson = JsonConvert.SerializeObject(await conn.QueryAsync("usp_getskiresortsnowfall", new
				{
					skiResortId
				}, commandType: CommandType.StoredProcedure));

				return JsonConvert.DeserializeObject<List<SkiResortSnowfall>>(skiResortJson);
			}
		}
	}
}
