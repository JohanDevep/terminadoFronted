import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
//useContactoMutation
export const useContactoMutation = () => {
  return useMutation(async (data) => {
    const response = await axios.post(
      "http://localhost:8080/api/auth//enviarMensaje",
      data
    );
    return response.data;
  });
};

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
//
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
        return Promise.reject(error.response.data); // Throw the error response data
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("userList"); // Invalidate the user list cache if necessary
      },
    }
  );
};

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

export const useCursoMutation = () => {
  return useMutation(async (cursoData) => {
    const response = await axios.post(
      "http://localhost:8080/api/auth/CrearCurso",
      cursoData
    );
    return response.data;
  });
};

export const useInstructoresMutation = () => {
  return useMutation(async (instructoresData) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/CrearInstructor',
        instructoresData
      );
      return response.data;
    } catch (error) {
      console.error('Error en la solicitud:', error.response.data);
      return Promise.reject(error.response.data);
    }
  });
};
