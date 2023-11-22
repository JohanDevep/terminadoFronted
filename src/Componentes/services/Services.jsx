import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

// Funcion de mutación para enviar mensajes de contacto
export const useContactoMutation = () => {
  return useMutation(async (data) => {
    const response = await axios.post(
      "http://localhost:8080/api/auth//enviarMensaje",
      data
    );
    return response.data;
  });
};

// Funcion de mutación para iniciar sesión
export const useLoginMutation = () => {
  return useMutation(async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/ingresar",
        data
      );
      return response.data.accessToken;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  });
};

// Funcion de mutación para registrar un nuevo usuario
export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (userData) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/register",
          userData
        );
        return response.data;
      } catch (error) {
        return Promise.reject(error.response.data);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userList");
      },
    }
  );
};

// Funcion de mutación para registrar un nuevo instructor
export const useRegisterINSMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (userData) => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/registerIns",
          userData
        );
        return response.data;
      } catch (error) {
        throw new Error(error.response.data);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userList");
      },
    }
  );
};

// Funcion de mutación para crear un nuevo curso
export const useCursoMutation = () => {
  return useMutation(async (cursoData) => {
    const response = await axios.post(
      "http://localhost:8080/api/auth/CrearCurso",
      cursoData
    );
    return response.data;
  });
};

// Funcion de mutación para crear un nuevo instructor
export const useInstructoresMutation = () => {
  return useMutation(async (instructoresData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/CrearInstructor",
        instructoresData
      );
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error.response.data);
      return Promise.reject(error.response.data);
    }
  });
};
