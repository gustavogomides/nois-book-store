<?php include '../validate.php' ?>
<div ng-controller="AdminController">
  <navbarheaderadmin></navbarheaderadmin>
</div>

<header id="header">
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Controle Seus Livros</small></h1>
      </div>

      <div class="col-md-2">
        <div class="dropdown create">
          <a class="btn btn-default" href="#/add/livro" type="button">Adicionar Novo Livro</a>
        </div>
      </div>
    </div>
  </div>
  <!-- /.container -->
</header>

<section id="breadcrumb">
  <div class="container">
    <ol class="breadcrumb">
      <li class="active">Dashboard / Livros</li>
    </ol>
  </div>
</section>

<div ng-controller="AdminController">
  <span ng-init="AdminController.listarLivros()">
    <section id="main">
      <div class="container">
        <div class="row">
          <navbarleft></navbarleft>
          <div class="col-md-9">
            <!-- Visão Geral do Site -->
            <div class="panel panel-default">
              <div class="panel-heading main-color-bg">
                <h3 class="panel-title">Livros</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                  <div class="col-md-12">
                    <input class="form-control" ng-model="search.title" type="text" placeholder="Filtrar Livros...">
                  </div>
                </div>
                <br>
                <table class="table table-striped table-hover">
                  <tr>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>ISBN</th>
                    <th></th>
                  </tr>
                  <tr ng-repeat="livro in listaDeLivros | filter:search">
                    <td>{{livro.title | limitTo:30}}</td>
                    <td>{{livro.price | currency:"R$"}}</td>
                    <td>{{livro.ISBN}}</td>
                    <td><a class="btn btn-default" href="#/edit/livro/{{livro.ISBN}}">Editar</a>
                        <button class="btn btn-danger" ng-click="AdminController.remove('livro', livro.ISBN)">Apagar</button></td>
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