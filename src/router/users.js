import Index from '@/components/users/Index'

import Read from '@/components/users/Read'

import Form from '@/components/users/Form'

export default {
    path : 'users',
    component : Index,
    children : [
        { path: '', component : Read },
        { path: 'index', component : Read },
        { path: 'add', component : Form },
        { path: 'edit/:id', component : Form }
    ]
}