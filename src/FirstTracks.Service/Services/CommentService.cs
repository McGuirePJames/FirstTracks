using System.Collections.Generic;
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

		public void CreateComment(string userId, string comment)
		{
			throw new System.NotImplementedException();
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
