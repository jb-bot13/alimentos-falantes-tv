const SUPABASE_URL =
  "https://fnmexbbmihfnjocwfvhr.supabase.co";

const SUPABASE_KEY =
  "public:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZubWV4YmJtaWhmbmpvY3dmdmhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyMDkyNjAsImV4cCI6MjEwNjc4NTI2MH0.i9ZsdV0zDtPsvlFOsBPHYzvY4ZukxORAspFOUcpiejE";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
