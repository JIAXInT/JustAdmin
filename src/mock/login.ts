import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'post',
    response: (req: { body: { name: string; password: string } }) => {
      const { name, password } = req.body
      if (name === 'admin' && password === '123456') {
        return {
          code: 200,
          message: '登录成功',
          data: {
            id: 1,
            name: 'admin',
            token: 'mock-token-123456'
          }
        }
      } else {
        return {
          code: 401,
          message: '账号或密码错误'
        }
      }
    }
  },
  {
    url: '/api/users/:id',
    method: 'get',
    response: (req: { params: { id: string } }) => {
      if (req.params.id === '1') {
        return {
          code: 0,
          data: {
            id: 1,
            name: 'justic',
            realname: 'justic',
            cellphone: 13912345678,
            enable: 1,
            createAt: '2021-01-02T10:20:26.000Z',
            updateAt: '2021-01-03T04:50:13.000Z',
            role: {
              id: 1,
              name: '超级管理员',
              intro: '所有权限',
              createAt: '2021-01-02T10:01:52.000Z',
              updateAt: '2021-01-02T10:01:52.000Z'
            },
            department: {
              id: 1,
              name: '总裁办',
              parentId: null,
              createAt: '2021-01-02T10:03:09.000Z',
              updateAt: '2021-01-05T08:25:46.000Z',
              leader: 'coderwhy'
            }
          }
        }
      } else if (req.params.id === '2') {
        return {
          code: 0,
          data: {
            id: 2,
            name: 'lisi',
            realname: '李四',
            cellphone: 13812345678,
            enable: 1,
            createAt: '2021-01-03T10:20:26.000Z',
            updateAt: '2021-01-04T04:50:13.000Z',
            role: {
              id: 2,
              name: '普通管理员',
              intro: '部分权限',
              createAt: '2021-01-03T10:01:52.000Z',
              updateAt: '2021-01-03T10:01:52.000Z'
            },
            department: {
              id: 2,
              name: '技术部',
              parentId: 1,
              createAt: '2021-01-03T10:03:09.000Z',
              updateAt: '2021-01-06T08:25:46.000Z',
              leader: 'lisi'
            }
          }
        }
      } else if (req.params.id === '3') {
        return {
          code: 0,
          data: {
            id: 3,
            name: 'wangwu',
            realname: '王五',
            cellphone: 13712345678,
            enable: 1,
            createAt: '2021-01-04T10:20:26.000Z',
            updateAt: '2021-01-05T04:50:13.000Z',
            role: {
              id: 3,
              name: '普通用户',
              intro: '基础权限',
              createAt: '2021-01-04T10:01:52.000Z',
              updateAt: '2021-01-04T10:01:52.000Z'
            },
            department: {
              id: 3,
              name: '市场部',
              parentId: 1,
              createAt: '2021-01-04T10:03:09.000Z',
              updateAt: '2021-01-07T08:25:46.000Z',
              leader: 'wangwu'
            }
          }
        }
      }
    }
  },
  {
    url: '/api/role/:id/menu',
    method: 'get',
    response: (req: { params: { id: string } }) => {
      const adminMenu = {
        code: 0,
        data: [
          {
            id: 38,
            name: '系统总览',
            type: 1,
            url: '/main/analysis',
            icon: 'el-icon-monitor',
            sort: 1,
            children: [
              {
                id: 39,
                url: '/main/analysis/overview',
                name: '核心技术',
                sort: 106,
                type: 2,
                children: null,
                parentId: 38
              },
              {
                id: 40,
                url: '/main/analysis/dashboard',
                name: '商品统计',
                sort: 107,
                type: 2,
                children: null,
                parentId: 38
              }
            ]
          },
          {
            id: 1,
            name: '系统管理',
            type: 1,
            url: '/main/system',
            icon: 'el-icon-setting',
            sort: 2,
            children: [
              {
                id: 2,
                url: '/main/system/user',
                name: '用户管理',
                sort: 100,
                type: 2,
                children: [
                  {
                    id: 5,
                    url: null,
                    name: '创建用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:create'
                  },
                  {
                    id: 6,
                    url: null,
                    name: '删除用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:delete'
                  },
                  {
                    id: 7,
                    url: null,
                    name: '修改用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:update'
                  },
                  {
                    id: 8,
                    url: null,
                    name: '查询用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 3,
                url: '/main/system/department',
                name: '部门管理',
                sort: 101,
                type: 2,
                children: [
                  {
                    id: 17,
                    url: null,
                    name: '创建部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:create'
                  },
                  {
                    id: 18,
                    url: null,
                    name: '删除部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:delete'
                  },
                  {
                    id: 19,
                    url: null,
                    name: '修改部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:update'
                  },
                  {
                    id: 20,
                    url: null,
                    name: '查询部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 4,
                url: '/main/system/menu',
                name: '菜单管理',
                sort: 103,
                type: 2,
                children: [
                  {
                    id: 21,
                    url: null,
                    name: '创建菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:create'
                  },
                  {
                    id: 22,
                    url: null,
                    name: '删除菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:delete'
                  },
                  {
                    id: 23,
                    url: null,
                    name: '修改菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:update'
                  },
                  {
                    id: 24,
                    url: null,
                    name: '查询菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 25,
                url: '/main/system/role',
                name: '角色管理',
                sort: 102,
                type: 2,
                children: [
                  {
                    id: 26,
                    url: null,
                    name: '创建角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:create'
                  },
                  {
                    id: 27,
                    url: null,
                    name: '删除角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:delete'
                  },
                  {
                    id: 28,
                    url: null,
                    name: '修改角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:update'
                  },
                  {
                    id: 29,
                    url: null,
                    name: '查询角色',
                    sort: null,
                    type: 3,
                    parentId: 25,
                    permission: 'system:role:query'
                  }
                ],
                parentId: 1
              }
            ]
          },
          {
            id: 9,
            name: '商品中心',
            type: 1,
            url: '/main/product',
            icon: 'el-icon-goods',
            sort: 3,
            children: [
              {
                id: 15,
                url: '/main/product/category',
                name: '商品类别',
                sort: 104,
                type: 2,
                children: [
                  {
                    id: 30,
                    url: null,
                    name: '创建类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:create'
                  },
                  {
                    id: 31,
                    url: null,
                    name: '删除类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:delete'
                  },
                  {
                    id: 32,
                    url: null,
                    name: '修改类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:update'
                  },
                  {
                    id: 33,
                    url: null,
                    name: '查询类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:query'
                  }
                ],
                parentId: 9
              },
              {
                id: 16,
                url: '/main/product/goods',
                name: '商品信息',
                sort: 105,
                type: 2,
                children: [
                  {
                    id: 34,
                    url: null,
                    name: '创建商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:create'
                  },
                  {
                    id: 35,
                    url: null,
                    name: '删除商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:delete'
                  },
                  {
                    id: 36,
                    url: null,
                    name: '修改商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:update'
                  },
                  {
                    id: 37,
                    url: null,
                    name: '查询商品',
                    sort: null,
                    type: 3,
                    parentId: 16,
                    permission: 'system:goods:query'
                  }
                ],
                parentId: 9
              }
            ]
          },
          {
            id: 41,
            name: '随便聊聊',
            type: 1,
            url: '/main/story',
            icon: 'el-icon-chat-line-round',
            sort: 4,
            children: [
              {
                id: 42,
                url: '/main/story/chat',
                name: '你的故事',
                sort: 108,
                type: 2,
                children: null,
                parentId: 41
              },
              {
                id: 43,
                url: '/main/story/list',
                name: '故事列表',
                sort: 109,
                type: 2,
                children: [],
                parentId: 41
              }
            ]
          }
        ]
      }

      const userMenu = {
        code: 0,
        data: [
          {
            id: 1,
            name: '系统管理',
            type: 1,
            url: '/main/system',
            icon: 'el-icon-setting',
            sort: 2,
            children: [
              {
                id: 2,
                url: '/main/system/user',
                name: '用户管理',
                sort: 100,
                type: 2,
                children: [
                  {
                    id: 5,
                    url: null,
                    name: '创建用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:create'
                  },
                  {
                    id: 6,
                    url: null,
                    name: '删除用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:delete'
                  },
                  {
                    id: 7,
                    url: null,
                    name: '修改用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:update'
                  },
                  {
                    id: 8,
                    url: null,
                    name: '查询用户',
                    sort: null,
                    type: 3,
                    parentId: 2,
                    permission: 'system:users:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 3,
                url: '/main/system/department',
                name: '部门管理',
                sort: 101,
                type: 2,
                children: [
                  {
                    id: 17,
                    url: null,
                    name: '创建部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:create'
                  },
                  {
                    id: 18,
                    url: null,
                    name: '删除部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:delete'
                  },
                  {
                    id: 19,
                    url: null,
                    name: '修改部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:update'
                  },
                  {
                    id: 20,
                    url: null,
                    name: '查询部门',
                    sort: null,
                    type: 3,
                    parentId: 3,
                    permission: 'system:department:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 4,
                url: '/main/system/menu',
                name: '菜单管理',
                sort: 103,
                type: 2,
                children: [
                  {
                    id: 21,
                    url: null,
                    name: '创建菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:create'
                  },
                  {
                    id: 22,
                    url: null,
                    name: '删除菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:delete'
                  },
                  {
                    id: 23,
                    url: null,
                    name: '修改菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:update'
                  },
                  {
                    id: 24,
                    url: null,
                    name: '查询菜单',
                    sort: null,
                    type: 3,
                    parentId: 4,
                    permission: 'system:menu:query'
                  }
                ],
                parentId: 1
              },
              {
                id: 25,
                url: '/main/system/role',
                name: '角色管理',
                sort: 102,
                type: 2,
                children: [],
                parentId: 1
              }
            ]
          },
          {
            id: 9,
            name: '商品中心',
            type: 1,
            url: '/main/product',
            icon: 'el-icon-goods',
            sort: 3,
            children: [
              {
                id: 15,
                url: '/main/product/category',
                name: '商品类别',
                sort: 104,
                type: 2,
                children: [
                  {
                    id: 30,
                    url: null,
                    name: '创建类别',
                    sort: null,
                    type: 3,
                    parentId: 15,
                    permission: 'system:category:create'
                  }
                ],
                parentId: 9
              },
              {
                id: 16,
                url: '/main/product/goods',
                name: '商品信息',
                sort: 105,
                type: 2,
                children: [],
                parentId: 9
              }
            ]
          }
        ]
      }

      if (req.params.id === '1') {
        return {
          code: 0,
          data: adminMenu
        }
      } else if (req.params.id === '2') {
        return {
          code: 0,
          data: userMenu
        }
      }
    }
  }
] as MockMethod[]
