using FirstTracks.Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FirstTracks.Service.Interfaces
{
	public interface ICommentService
	{
		Task CreateCommentAsync(string userId, string comment);
		Task<Comment> GetCommentAsync(string commentId);
		Task<List<Comment>> GetCommentsAsync(string commentId);
		Task DeleteCommentAsync(string commentId);
		Task UpdateCommentAsync(string commentId);
	}
}
