'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Role = use('Role')

class RoleSeeder {
  async run () {

    //Role é um model
    //Criando o admin.
    await Role.create({

      name: 'Admin',
      slug: 'admin',
      description: 'Administrador do sistema!'

    })

    //Criando cargo de gerente
    await Role.create({

      name: 'Manager',
      slug: 'manager',
      description: 'Gerente da loja!'

    })

    //Criando cargo de cliente
    await Role.create({

      name: 'Client',
      slug: 'client',
      description: 'Cliente da loja!'

    })

  }
}

module.exports = RoleSeeder
