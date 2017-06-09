<?php include '../validate.php' ?>
<div ng-controller="AdminController">
    <navbarheaderadmin></navbarheaderadmin>
</div>

<header id="header">
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Controle Suas Categorias</small></h1>
            </div>

            <div class="col-md-2">
                <div class="dropdown create">
                    <a class="btn btn-default" href="#/add/categoria" type="button">Adicionar Nova Categoria</a>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container -->
</header>

<section id="breadcrumb">
    <div class="container">
        <ol class="breadcrumb">
            <li class="active">Dashboard / Categorias</li>
        </ol>
    </div>
</section>

<div ng-controller="AdminController">
    <span ng-init="AdminController.listarCategorias()">
<section id="main">
    <div class="container">
        <div class="row">
            <div ng-controller="AdminController">
                <navbarleft></navbarleft>
            </div>
            <div class="col-md-9">
                <!-- Visão Geral do Site -->
                <div class="panel panel-default">
                    <div class="panel-heading main-color-bg">
                        <h3 class="panel-title">Categorias</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12">
                                <input class="form-control" ng-model="search" type="text" placeholder="Filtrar Livros...">
                            </div>
                        </div>
                        <br>
                        <table class="table table-striped table-hover">
                            <tr>
                                <th>Nome da Categoria</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr ng-repeat="categoria in listaDeCategorias | filter:search">
                                <td>{{categoria.CategoryName}}</td>
                                <td></td>
                                <td></td>
                                <td><a class="btn btn-default" href="#/edit/categoria/{{categoria.CategoryID}}">Editar</a>
                                    <button class="btn btn-danger" ng-click="AdminController.remove('categoria', categoria.CategoryID)">Apagar</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  </span>
</div>