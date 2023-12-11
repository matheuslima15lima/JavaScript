using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {
        //acesso aos métodos do repositório
        ComentariosEventoRepository comentario = new ComentariosEventoRepository();

        //Armazena dados da API externa (IA-Azure)
        private readonly ContentModeratorClient _contentModeratorClient;

        /// <summary>
        /// Construtor que recebe os dados necessarios para o acesso ao servico externo
        /// </summary>
        /// <param name="contentModeratorClient">objeto do tipo ContentModerator Client</param>
        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        [HttpPost("CadastroIA")]
        public async Task<IActionResult> PostIA(ComentariosEvento comentariosEvento)
        {
            try
            {
                //se a descricao do comentario nao for passado no objeto
                if(string.IsNullOrEmpty(comentariosEvento.Descricao)) 
                {
                    return BadRequest("O texto a ser analisado não pode ser vazio!");
                }

                //converte a string(descricao do comentario ) em MemoryStream
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(comentariosEvento.Descricao));

                //realiza a moderacao do conteudo(descricao do comentario)
                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plan", stream, "por", false, false, null, true);

                //Se existir termos ofensivos 
                if(moderationResult.Terms != null) 
                {
                    //Atribuir false para exibe
                    comentariosEvento.Exibe = false;

                    //cadastra o comentario
                    comentario.Cadastrar(comentariosEvento);
                }

                else
                {
                    comentariosEvento.Exibe= true;

                    comentario.Cadastrar(comentariosEvento);
                }
                return StatusCode(201, comentariosEvento);
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(comentario.Listar());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetIA()
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe());
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpGet ("BuscarPorIdUsuario")]
        public IActionResult GetByIdUser(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return Ok(comentario.BuscarPorIdUsuario(idUsuario,idEvento));
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                comentario.Cadastrar(novoComentario);
                return StatusCode(201,novoComentario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
                
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);

                return NoContent();
            }
            catch (Exception e)
            {

               return BadRequest(e.Message);
            }
        }
    }
}
