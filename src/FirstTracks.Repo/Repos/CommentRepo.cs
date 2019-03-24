using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using Microsoft.Extensions.Options;

namespace FirstTracks.Repo.Repos
{
	public class CommentRepo : ICommentRepo
	{
		private readonly ConnectionStrings _connectionStrings;
		public CommentRepo(
			IOptions<ConnectionStrings> options
		)
		{
			this._connectionStrings = options.Value;
		}

		public async Task CreateCommentAsync(string userId, string comment)
		{
			string sqlQuery = "INSERT INTO Comment " +
							  "VALUES(@UserId, @Comment)";

			using(SqlConnection conn = new SqlConnection(this._connectionStrings.FirstTracksDB))
			{
				await conn.OpenAsync();

				conn.Execute(sqlQuery, new
				{
					Comment = comment
				});
			};
		}

		public async Task DeleteCommentAsync(string commentId)
		{
			throw new System.NotImplementedException();
		}

		public async Task<Comment> GetCommentAsync(string commentId)
		{
			throw new System.NotImplementedException();
		}

		public async Task<List<Comment>> GetCommentsAsync(string commentId)
		{
			throw new System.NotImplementedException();
		}

		public async Task UpdateCommentAsync(string commentId)
		{
			throw new System.NotImplementedException();
		}
	}
}
