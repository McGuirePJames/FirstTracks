using FirstTracks.Core.Models;
using System.Collections.Generic;

namespace FirstTracks.Repo.Interfaces
{
	public interface ICommentRepo
	{
		void CreateComment(string userId, string comment);
		Comment GetComment(string commentId);
		List<Comment> GetComments(string commentId);
		void DeleteComment(string commentId);
		void UpdateComment(string commentId);
	}
}
