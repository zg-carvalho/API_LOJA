
import Foto from "../models/Foto"
import Pedido from "../models/Pedido"
import Produto from "../models/Produto"

class PedidoController{
  async index(req, res) {
    const pedido = await Pedido.findAll()
    res.json(pedido)
  }

  async store(req, res) {
       //lista pedidos recebe a convesão de obejoto que está sendo enviado do front
    var lista_pedidos = JSON.parse(req.body.itens) //conversão do objeto carrinho para array

    lista_pedidos.map(async produto_carrinho=>{ //os produtos do array da lista do carrinho são mapeados e o produto que tiver o mesmo ID do produto que está em carrinho
//terá sua quantidade atualizada

// await está buscando o produto que está no bando de dados da API que tenha o mesmo ID do produto que está no array da variável lista_pedido
      const produto = await Produto.findByPk(produto_carrinho.id)

//  variavel quandidade_atualizada  recebe a subtração da quantidade do produto da API com o produto da lista_pedidos
      var quantidade_atualizada = produto.quantidade - produto_carrinho.quantidade

// para atualizar a quantidade da quandidade do banco de dados da API pela quantidade atualizada, precisamos criar uma variável que receberá as informações com a quantidade atualizada
// os 3 pontos indicam que acessaremos todas as informações que estão dentro do array produto, e quantidade será atualizado com o novo valor que vem da variável quanditade_atualizada
 var Produtos_Ataualizaos = {...produto, quantidade: quantidade_atualizada}

      // produtoAtualizado recebe o novo array atualizado e faz o upload das informações para o banco de dados
       produto.update(Produtos_Ataualizaos)

    })
    return res.json({mensagem:"Tudo Certo"})

 //



    console.log(lista_pedidos)


    // try {
    //   const pedido = await Pedido.create(req.body)

    //   return res.json(pedido)
    // }catch (e) {
    //   return res.status(400).json({
    //     errors: e.errors.map((err) => err.message)
    //   })
    // }
  }

  async show(req, res) {
    try {
      const {id} = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      const pedido = await Pedido.findByPk(id, {
        attributes:["id","itens"],
        include: {
          model: Foto,
          attributes: ["url","filename"]
        },
      });

      if(!pedido) {
        return res.status(400).json({
          errors: ["Pedido não existe"],
        });
      }

      return res.json(pedido)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }

  }


}
export default new PedidoController()
