using Dapper;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Linq;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace FirstTracks.Repo.Repos
{
	public class SkiResortRepo : ISkiResortRepo
	{
		private readonly ConnectionStrings _connectionStrings;
		public SkiResortRepo(
			IOptions<ConnectionStrings> options)
		{
			this._connectionStrings = options.Value;
		}

		public async Task<SkiResort> GetSkiResortAsync(string skiResortId)
		{
			using (SqlConnection conn = new SqlConnection(this._connectionStrings.FirstTracksDB))
			{
				var skiResortJson = JsonConvert.SerializeObject(await conn.QuerySingleOrDefaultAsync("usp_getskiresort", new
				{
					skiResortId
				}, commandType: CommandType.StoredProcedure));

				var trailsJson = JsonConvert.SerializeObject(await conn.QueryAsync("usp_getskiresorttrails", new
				{
					skiResortId
				}, commandType: CommandType.StoredProcedure));

				SkiResort skiResort = JsonConvert.DeserializeObject<SkiResort>(skiResortJson);
				skiResort.Trails = JsonConvert.DeserializeObject<List<Trail>>(trailsJson);

				return skiResort;
			}
		}

		public async Task<List<SkiResort>> GetSkiResortsAsync()
		{
			using (SqlConnection conn = new SqlConnection(this._connectionStrings.FirstTracksDB))
			{
				var result = JsonConvert.SerializeObject(await conn.QueryAsync("usp_getskiresorts", commandType: CommandType.StoredProcedure));

				return JsonConvert.DeserializeObject<List<SkiResort>>(result);
			}
		}
	}
}

