<div class="container mainContainer" style="max-width: 500px; margin: 2rem auto;">
    <p class="itemType">{{message}}</p>

    <form class="mb-3 " action="/login" method="POST" >
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" class="form-control" id="password" name="password" required>
        </div>

        <button type="submit" class="btn btn-primary mt-3 mb-3">Login</button>
        <p class="title">Ingresá tu email y contraseña o crea una cuenta primero.</p>
    </form>

    <div class="d-flex justify-content-center">
        <a href="/register" class="btn btn-outline-warning">Registrarse</a>
        <a href="/api/sessions/github" class="btn btn-outline-warning">Entrar con Github</a>

    </div>
</div>