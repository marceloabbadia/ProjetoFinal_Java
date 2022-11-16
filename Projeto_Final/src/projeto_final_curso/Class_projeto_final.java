package projeto_final_curso;

import java.util.*;

public class Class_projeto_final {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	
	
	double cadSalario, inss, irrf, salario, baseCalculo, salarioLiq;
	int indice;
	ArrayList<Double> salarios = new ArrayList<Double>(10);
	ArrayList<String> funcionarios = new ArrayList<String>(10);
	String menu, cadNome, funcionario;
	Scanner input = new Scanner(System.in);
	boolean run = true;
	
	
	while (run) {
		// Menu de interação no terminal
		System.out.print("\nEscolha uma opção\n"
					   + "1. Cadastrar funcionário\n"
					   + "2. Imprimir contracheque\n"
					   + "Digite a opção: ");
		
		menu = input.nextLine();
		switch (menu) {
		case "1":
			// Entrada do nome do funcionário
			System.out.print("\nDigite o nome do funcionário: ");
			cadNome = input.nextLine();
			funcionarios.add(cadNome);
			
			// Entrada do salário do funcionário
			
			System.out.print("Digite o salário do funcionário: ");
			cadSalario = input.nextDouble();
			salarios.add(cadSalario);
	
			// Impressão de confirmação do cadastro com o nome do funcionário e seu respectivo salário
			System.out.printf("Funcionário %s cadastrado com o salário de R$%.2f\n", cadNome, cadSalario);
			break;
		case "2":
			// Pega o item na lista da posição "índice"
			System.out.print("Qual o índice do funcionário que deseja imprimir o contracheque? Digite o ID: ");
			indice = input.nextInt();
			salario = salarios.get(indice);
			
			//  Cálculo INSS - verifica no bloco de IFs em qual alíquota o salário se enquadra e faz o cálculo para definir o INSS
			if (salario <= 1212.00) {
				inss = salario * 0.075;
			} else if (1212.01 <= salario && salario <= 2427.35) {
				inss = ((salario - 1212.01) * 0.09) + 90.90;
			} else if (2427.36 <= salario && salario <= 3641.03) {
				inss = ((salario - 2427.36) * 0.12) + 90.90 + 109.3806;
			} else if (3641.04 <= salario && salario <= 7087.22) {
				inss = ((salario - 3641.04) * 0.14) + 90.90 + 109.3806 + 145.6404;
			} else {
				inss = 828.39;
			}
			
			// Cálculo IRRF - desconta do salario o INSS e depois verifica no bloco de IFs qual a alíquota de desconto será aplicada
			baseCalculo = salario - inss;
			if (baseCalculo <= 1903.98) {
				irrf = baseCalculo * 0.0;
			} else if (1903.99 <= baseCalculo && baseCalculo <= 2826.65) {
				irrf = (baseCalculo * 0.075) - 142.80;
			} else if (2826.66 <= baseCalculo && baseCalculo <= 3751.05) {
				irrf = (baseCalculo * 0.15) - 354.80;
			} else if (3751.06 <= baseCalculo && baseCalculo <= 4664.68) {
				irrf = (baseCalculo * 0.225) - 636.13;
			} else {
				irrf = (baseCalculo * 0.275) - 869.36;
			}
			
			// Cálcula o salário liquido e imprime o funcionário, seu salário bruto, descontos de INNS e IRRF e seu salário liquido
			salarioLiq = salario - inss - irrf;
			funcionario = funcionarios.get(indice);
			System.out.printf("1. Funcionário: %s\n"
						    + "2. Salário Bruto: R$%.2f\n"
						    + "3. Desconto INSS: R$%.2f\n"
						    + "4. Desconto IRRF: R$%.2f\n"
						    + "5. Salário Líquido: R$%.2f\n",
						    funcionario, salario, inss, irrf, salarioLiq);
			break;
		}

	}
input.close();
}

	
	

}
