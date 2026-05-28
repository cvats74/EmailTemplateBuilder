
using Microsoft.AspNetCore.Mvc;

namespace EmailTemplateBuilder.Controllers
{
    [Route("api/assets")]
    [ApiController]
    public class AssetsController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;

        public AssetsController(IWebHostEnvironment env)
        {
            _env = env;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest();

            var uploadsPath = Path.Combine(
                _env.WebRootPath,
                "uploads"
            );

            if (!Directory.Exists(uploadsPath))
                Directory.CreateDirectory(uploadsPath);

            var fileName =
                $"{Guid.NewGuid()}{Path.GetExtension(file.FileName)}";

            var filePath = Path.Combine(
                uploadsPath,
                fileName
            );

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var fileUrl = $"/uploads/{fileName}";

            return Ok(new
            {
                url = fileUrl
            });
        }
    }

}







