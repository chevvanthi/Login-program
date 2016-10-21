package com.webapp.project;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Logout extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {		
		res.setContentType("text/html");
		PrintWriter t = res.getWriter();
		req.getRequestDispatcher("link.html").include(req, res);
		HttpSession session2 = req.getSession(false);
		
		if (session2 != null) {
			session2.invalidate();
			t.println(" <br> You are logged out succesfully");
		} else 
		{
			t.println(" <br> please login first");
			RequestDispatcher rd = req.getRequestDispatcher("index.html");
			rd.include(req, res);
		}

	}
}
