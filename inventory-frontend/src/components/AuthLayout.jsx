export default function AuthLayout({ children }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#fafafa",
    }}>
      <div style={{
        width: "380px",
        padding: "40px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        {children}
      </div>
    </div>
  );
}
