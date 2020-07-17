using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage = "هذاالحقل مطلوب")]
        public string Username { get; set; }
        [Required(ErrorMessage = "هذا الحق مطلوب")]
        public string Password { get; set; }
    }
}