using System.Collections.Generic;
using System.Threading.Tasks;
using FirstTracks.Core.Models;
using FirstTracks.Repo.Interfaces;
using FirstTracks.Service.Interfaces;

namespace FirstTracks.Service.Services
{	
	public class CommentService : ICommentService
	{
		private readonly ICommentRepo _commentRepo;

		public CommentService(
			ICommentRepo commentRepo
		)
		{
			this._commentRepo = commentRepo;
		}

		public async Task CreateCommentAsync(string userId, string comment)
		{
			throw new System.NotImplementedException();
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
