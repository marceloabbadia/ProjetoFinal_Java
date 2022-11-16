var name_temp_texto = "";
var salario_temp_valor = "";
var nome = [];
var salario = [];
var saida;
var cadastro;
var cont = 0;
var consult_ID;
var consult_nome;

//descobrir e pegar o valor da selecao da tela principal
function coletarSelect() {
  const select = document.querySelector("#selecao");
  const valorSelecao = select.value;
  definir(valorSelecao);
}

//direcionar para qual funcao deve ir
function definir(valorSelecao) {
  if (valorSelecao == "cad") {
    cadastroFunc();
  } else if (valorSelecao == "imp") {
    pesquisa();
  }
}

//cria o formulario de cadastro no HTML
function cadastroFunc() {
  cadastro = document.getElementById("entrada");
  cadastro.innerHTML = `<form><fieldset><legend><h3>Preencha o cadastro:</h3></legend>
            <label>Nome:<input type="text" name="nome" id="nome" size="20px" /><br /><br
            /></label>
            <label>Salário: <input type="number" name="salario" id="salario" /></label>
            <br />
            </select>
            <br />
            <br />
            <input type="button" value="Confirmar" onclick='resgateForm()'/>
            </fieldset>
            </form>`;
} // resgata os valores do formulario HTML criado
function resgateForm() {
  let name_temp = document.getElementById("nome");
  name_temp_texto = name_temp.value;
  let salario_temp = document.getElementById("salario");
  salario_temp_valor = Number(salario_temp.value);
  armazenaInformacoes(name_temp_texto, salario_temp_valor);
}
//Banco de dados dos dois arrays criados
function armazenaInformacoes(a, b) {
  if (nome == "" && salario == "") {
    nome.push(a);
    salario.push(b);
  } else {
    cont = nome.length + 1;
    nome[cont] = a;
    salario[cont] = b;
  }
  console.log(nome, salario);
  cadastro.innerHTML = "";
  coletarSelect();
}
// insere formulario de pesquisa no html
function pesquisa() {
  var consulta = document.getElementById("saida");
  consulta.innerHTML = `<form><fieldset><legend><h3>Preencha os dados da consulta:</h3></legend>
            <label>Nome:<input type="text" name="nome" id="nomeC" size="20px" /><br /><br
            /></label>
            <label>ID: <input type="number" name="ID" id="ID" /></label>
            <br />
            </select>
            <br />
            <br />
            <input type="button" value="Confirmar" onclick='resgateFunc()'/>
            </fieldset>
            </form>`;
}
//resgata informacoes do cadastro da pesquisa
function resgateFunc() {
  let name_temp = document.getElementById("nomeC");
  consult_nome = name_temp.value;
  let verif_ID = document.getElementById("ID");
  consult_ID = Number(verif_ID.value);
  consultCad(consult_nome, consult_ID);
}
//faz a pesquisa nos funcionarios cadastrados
function consultCad(a, b) {
  let nome_pesq = a;
  let ID_pesquisa = b;
  let i = 0;
  for (i = 0; i < nome.length; i++) {
    if (nome_pesq == nome[i] && ID_pesquisa == [i]) {
      console.log(nome[i], [i]);
      impressaoContraCheque(nome[i], [i]);
    } else {
      console.log("nome ou ID não encontrado");
    }
  }
}

function impressaoContraCheque(c, d) {
  var calcularSalario = salario[d];
  var inss;
  var irrf;

  if (calcularSalario <= 1212.0) {
    inss = calcularSalario * 0.075;
  } else if (1212.01 <= calcularSalario && calcularSalario <= 2427.35) {
    inss = (calcularSalario - 1212.01) * 0.09 + 90.9;
  } else if (2427.36 <= calcularSalario && calcularSalario <= 3641.03) {
    inss = (calcularSalario - 2427.36) * 0.12 + 90.9 + 109.3806;
  } else if (3641.04 <= calcularSalario && calcularSalario <= 7087.22) {
    inss = (calcularSalario - 3641.04) * 0.14 + 90.9 + 109.3806 + 145.6404;
  } else {
    inss = 828.39;
  }

  var baseCalculo = calcularSalario - inss;
  if (baseCalculo <= 1903.98) {
    irrf = baseCalculo * 0.0;
  } else if (1903.99 <= baseCalculo && baseCalculo <= 2826.65) {
    irrf = baseCalculo * 0.075 - 142.8;
  } else if (2826.66 <= baseCalculo && baseCalculo <= 3751.05) {
    irrf = baseCalculo * 0.15 - 354.8;
  } else if (3751.06 <= baseCalculo && baseCalculo <= 4664.68) {
    irrf = baseCalculo * 0.225 - 636.13;
  } else {
    irrf = baseCalculo * 0.275 - 869.36;
  }
  var impressao = document.getElementById("retorno");
  impressao.innerHTML = `<div id="impressao"><h3>Resumo do funcionário</h3><br/>Nome do funcionário: <strong> ${c} </strong> <br/>Salário bruto: <strong>R$ ${salario[
    d
  ].toFixed(2)}</strong><br/>Desconto de INSS: <strong>R$ ${inss.toFixed(
    2
  )}</strong><br/>Desconto de IRRF: <strong>R$ ${irrf.toFixed(
    2
  )}</strong><br/>Salário liquido: <strong>R$ ${(
    salario[d] -
    inss -
    irrf
  ).toFixed(2)}</strong></div>`;
}
