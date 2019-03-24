using System.Collections.Generic;
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

		public void CreateComment(string userId, string comment)
		{
			string sqlQuery = "INSERT INTO Comment " +
							  "VALUES()";
		}

		public void DeleteComment(string commentId)
		{
			throw new System.NotImplementedException();
		}

		public Comment GetComment(string commentId)
		{
			throw new System.NotImplementedException();
		}

		public List<Comment> GetComments(string commentId)
		{
			throw new System.NotImplementedException();
		}

		public void UpdateComment(string commentId)
		{
			throw new System.NotImplementedException();
		}
	}
}
