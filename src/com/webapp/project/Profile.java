package com.webapp.project;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Profile extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();
		req.getRequestDispatcher("link.html").include(req, res);      
		HttpSession session = req.getSession(false);
		
		if (session != null) {
			String name = (String) session.getAttribute("name");
			String password=(String)session.getAttribute("password");
			
			out.print("<br> Welcome to your Profile " + name);
			out.println(" <br>Your name :" + name);
			out.println(" <br> Your password :" + password);
			//Date time= new Date(session.getLastAccessedTime());
			//out.println("<br>last accessed time is " + time);		
			String ename= req.getParameter("ename");
			String mobilenum=req.getParameter("number");
			String email=req.getParameter("email");
			String city=req.getParameter("city");
			String gender=req.getParameter("gender");
			
			session.setAttribute("ename", ename);
			session.setAttribute("mobilenum",mobilenum);
			session.setAttribute("email", email);
			session.setAttribute("city", city);
			session.setAttribute("gender", gender);
			
			if(ename!=null&&mobilenum!=null&&email!=null&&city!=null)
			{
			
			String ename1=(String)session.getAttribute("ename");
			String mobilenum1=(String)session.getAttribute("mobilenum");
			String email1=(String)session.getAttribute("email");
			String city1=(String)session.getAttribute("city");			
			String gender1=(String)session.getAttribute("gender");
				
			out.println(" <br> your Registered name is: " + ename1);
			out.println(" <br> Mobile number: " + mobilenum1);
			out.println(" <br> Email: " + email1);
			out.println("<br>  city:" + city1);
			out.println("<br> Gender: " + gender1);
			session.invalidate();
			}
			else
			{
				out.println("<br><h4>please enter all the details to register</h4>");
				req.getRequestDispatcher("details.html").include(req, res);
			}
			
			
		} else {
			out.print("<br>Please login first");
			req.getRequestDispatcher("index.html").include(req, res);
		}

	}
}
