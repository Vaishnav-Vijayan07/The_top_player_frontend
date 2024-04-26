const { NextResponse } = require("next/server");

export default function middleware(req) {
  const verifytoken = req.cookies.get("UT");
  let url = req.nextUrl.pathname;

  if (verifytoken && url.includes("/admin")) {
    if (url.includes("/ar/admin")) {
      return NextResponse.redirect(`${process.env.webDomain}/ar`);
    } else {
      return NextResponse.redirect(`${process.env.webDomain}/en`);
    }
  }

  if (url.includes("/user") && !verifytoken) {
    if (url.includes("/ar/user")) {
      // return NextResponse.redirect(`${process.env.webDomain}/ar/admin/signup`);
    } else {
      // return NextResponse.redirect(`${process.env.webDomain}/en/admin/signup`);
    }
  }
}
