# Contribuindo

## Pull requests

PRs que alteram um artigo em `src/pages/writing/` devem usar o título:

```text
[post] - Título do post
```

O template da PR traz o checklist de revisão. O workflow `Validate conventions` também verifica automaticamente
esse padrão quando uma PR altera um post.

## Commits

Os commits seguem [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/). Exemplos:

```text
feat: add newsletter signup
feat(post): add study workflow post
fix: correct article metadata
test: add post rendering test
docs: update contribution guide
chore: update dependencies
```

Depois de instalar as dependências, o Husky valida cada mensagem no hook `commit-msg`. Para validar manualmente o
último commit, execute `npm run commitlint`.
