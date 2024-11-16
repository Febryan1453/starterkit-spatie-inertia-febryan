<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            // permission sidebar
            'sidebar.dashboard',
            'sidebar.dosen',
            'sidebar.mahasiswa',

            // permission users
            'users.index',
            'users.create',
            'users.edit',
            'users.delete',
            
            // permission roles
            'roles.index',
            'roles.create',
            'roles.edit',
            'roles.delete',
            
            // permission permissions
            'permissions.index',
            
        ];

        foreach ($permissions as $permission) {
            if (!Permission::where('name', $permission)->exists()) {
                Permission::create(['name' => $permission, 'guard_name' => 'web']);
            }
        }
    }
}
