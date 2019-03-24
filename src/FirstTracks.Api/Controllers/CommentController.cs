using FirstTracks.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FirstTracks.Api.Controllers
{
	[Route("/api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
		private readonly ICommentService _commentService;		

		public CommentController(
			ICommentService commentService
		)
		{
			this._commentService = commentService;
		}
		
		public IActionResult CreateComment(string userId, string comment)
		{
			return Ok();
		}

		public IActionResult GetComment(string commentId)
		{
			return Ok();
		}

		public IActionResult GetComments(string commentId)
		{
			return Ok();
		}

		public IActionResult DeleteComment(string commentId)
		{
			return Ok();
		}

		public IActionResult UpdateComment(string commentId)
		{
			return Ok();
		}
	}
}