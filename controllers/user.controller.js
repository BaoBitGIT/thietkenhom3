import { supabase } from '../config/supabase.js';

// Lấy danh sách user
export const getUsers = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};