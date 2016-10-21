package com.webapp.project;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
    StringBuffer var=new StringBuffer();
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();
		String name = req.getParameter("name");
		String pass = req.getParameter("pass");
		
		req.getRequestDispatcher("link.html").include(req, res);	 
		
		if (!(pass.isEmpty())&&(!(name.isEmpty()))) {
				
			if(pass.length()<5)
			{
				out.println("<br><h4> Please enter min 5 character in password </h4>");
				RequestDispatcher rd = req.getRequestDispatcher("index.html");
				rd.include(req, res);
			}
			else{
			out.println("<br> Hey " + name + " you logged in successfully");
			HttpSession session = req.getSession();
			session.setAttribute("name", name);
			session.setAttribute("password", pass);
			//out.println(" <br> session id is " + session.getId());
			//Date create = new Date(session.getCreationTime());
			//out.println("<br> your session creation time is " + create);
			RequestDispatcher rd = req.getRequestDispatcher("details.html");
			rd.include(req, res);		}	
		}
		
		else {
			out.println("<br> Sorry! user name or password may be wrong please enter valid details");
			RequestDispatcher rd = req.getRequestDispatcher("index.html");
			rd.include(req, res);
		}
		
		out.close();		
	}
	


}
