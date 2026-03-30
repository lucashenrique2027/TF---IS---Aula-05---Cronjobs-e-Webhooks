Markdown
# TF - Integração de Sistemas: Webhooks e Cron Jobs

Este projeto tem como objetivo praticar o recebimento de Webhooks utilizando Express, a criação de comandos customizados no Node.js e a automação de tarefas via Cron Job no Linux/WSL.

## 🛠️ Estrutura do Projeto

A estrutura segue o padrão de comandos em diretórios separados:

```text
.
├── app
│   └── Commands
│       └── SyncCommand.js      # Lógica do comando sync
├── command.js                  # Entrypoint de comandos (node command [cmd])
├── index.js                    # Servidor Express (Webhook)
├── package.json                # Dependências e scripts
└── node_modules/               # Módulos do Node.js
🚀 Como Executar
1. Webhook (Express)
O servidor escuta requisições POST na rota /webhook/payment.

Comando para iniciar:

Bash
node index.js
Exemplo de teste (CURL):

Bash
curl -X POST http://localhost:3000/webhook/payment \
-H "Content-Type: application/json" \
-d '{"event": "payment.approved"}'
2. Command Sync
O projeto possui um comando de sincronização que pode ser chamado via terminal.

Comando:

Bash
node command sync
Saída esperada: sync executado

⏰ Configuração do Cron Job
O agendamento foi configurado no sistema Linux via crontab -e seguindo os critérios:

Intervalo: A cada 4 minutos.

Dias do mês: Do dia 10 ao 31.

Dias da semana: Segunda a sexta-feira (1-5).

Regra utilizada:

Bash
*/4 * 10-31 * 1-5 cd /home/lucas/TF-IS-Aula05-cronjobs && /usr/bin/node command sync
📄 Requisitos Atendidos (TF)
[x] Repositório estruturado com /app/Commands.

[x] Rota POST /webhook/payment funcional com leitura de req.body.

[x] Comando sync implementado e disparando log.

[x] Cron Job configurado com regra de agendamento complexa.

Desenvolvido por: Lucas Henrique
Curso: Análise e Desenvolvimento de Sistemas (ADS) - UniFAAT


### 💡 Dicas Finais para a Entrega:
1. **Instruções de Instalação:** Como você já rodou o `npm install express`, o `package.json` já deve estar com a dependência. Se quiser ser ainda mais técnico, pode adicionar uma seção de "Instalação" no README dizendo para rodar `npm install`.
2. **Caminho do Cron:** No README, deixei o caminho `/home/lucas/TF-IS-Aula05-cronjobs` que é o que aparece nos seus prints. Se você mudar a pasta de lugar, lembre-se de atualizar lá.

Ficou faltando algo ou já vai subir para o repositório?