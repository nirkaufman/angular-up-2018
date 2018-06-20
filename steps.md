## Init store Project
`ng g store State --root -m app.module.ts`

## Init Effects
`ng g effect App --root -m app.module.ts`

## Feature module
`ng g m User`
`ng g feature user/User -m user/user.module.ts --group`

## Container
`ng g container UsersPage --state reducers/index.ts --stateInterface State`
