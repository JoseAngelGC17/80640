package mx.uv;

import static spark.Spark.*;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        system.out.println("hola mundo");

        get("/",
        (request, response)->"<h1>Hola mundo</h1>"
        
        );
         get("/ruta1",
        (request, response)->"<h1>adios mundo</h1>"
        
        ); 
        get("/ruta2",
        (request, response)->"<h1>que tal mundo</h1>"
        
        );
         get("/ruta3",
        (request, response)->"<h1>ok mundo</h1>"
        
        );
    }
}