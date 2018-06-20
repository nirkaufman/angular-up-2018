## Init store Project
`ng g store State --root -m app.module.ts`

## Init Effects
`ng g effect App --root -m app.module.ts`

## Feature module
`ng g m User`
`ng g feature user/User -m user/user.module.ts --group`

## Container
`ng g container user/UsersPage --state reducers/user.reducer.ts --stateInterface State`

## Entity
`ng g m Books`
`ng g entity books/Book --flat false`
`ng g container books/BookPage  --state book/book.reducer.ts --stateInterface State`

