# Deploy no Vercel

Este projeto é um funil/quiz criado com React + Vite.

## Estrutura principal

- `src/`: componentes React, quiz, resultado, captura de lead e página de vendas.
- `public/`: arquivos públicos, incluindo o PDF do produto principal.
- `assets/`: imagens usadas fora do fluxo padrão do Vite.
- `index.html`: entrada HTML do Vite.
- `vite.config.js`: configuração do Vite.
- `vercel.json`: configuração para o Vercel servir rotas internas como `/vendas` e `/obrigado`.

## Comandos locais

Instalar dependências:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

Gerar versão de produção:

```bash
npm run build
```

A pasta final gerada para produção é:

```txt
dist/
```

Testar a versão de produção localmente:

```bash
npm run preview
```

## Publicar no Vercel pelo painel

1. Acesse `https://vercel.com`.
2. Faça login ou crie uma conta.
3. Clique em `Add New...` e depois em `Project`.
4. Importe o repositório deste projeto.
5. Nas configurações do projeto, use:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Clique em `Deploy`.

## Publicar no Vercel pela CLI

Instale a CLI:

```bash
npm install -g vercel
```

Faça login:

```bash
vercel login
```

Publique:

```bash
vercel
```

Para publicar em produção:

```bash
vercel --prod
```

## Rotas importantes

O arquivo `vercel.json` garante que estas rotas funcionem mesmo quando abertas diretamente no navegador:

- `/`
- `/vendas`
- `/obrigado`

Sem esse arquivo, o Vercel poderia retornar erro 404 ao abrir `/vendas` ou `/obrigado` diretamente.

## Checklist antes de publicar

- Rodar `npm run build`.
- Confirmar que a pasta `dist/` foi criada.
- Conferir se o checkout Kiwify está correto em `src/components/SalesPage.jsx`.
- Testar o fluxo: quiz → resultado → `/vendas` → checkout.
- Depois do deploy, testar no link final do Vercel em desktop e celular.
